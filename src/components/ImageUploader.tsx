import { useRef, useState, type ChangeEvent, type DragEvent } from 'react'
import { UploadCloud, X, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react'

export interface UploadedImageInfo {
  file: File
  previewUrl: string
  name: string
  sizeFormatted: string
}

interface ImageUploaderProps {
  label: string
  sublabel: string
  side: 'front' | 'back'
  required?: boolean
  image: UploadedImageInfo | null
  onChange: (image: UploadedImageInfo | null) => void
  error?: string
}

export default function ImageUploader({
  label,
  sublabel,
  side,
  required = true,
  image,
  onChange,
  error
}: ImageUploaderProps): JSX.Element {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState<boolean>(false)
  const [internalError, setInternalError] = useState<string | null>(null)

  const allowedTypes: string[] = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
  const maxSizeBytes: number = 10 * 1024 * 1024 // 10MB

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  const processFile = (file: File): void => {
    setInternalError(null)

    if (!allowedTypes.includes(file.type.toLowerCase())) {
      setInternalError('Unsupported format. Please upload JPG, PNG, or WEBP only.')
      return
    }

    if (file.size > maxSizeBytes) {
      setInternalError('File is too large. Maximum allowable size is 10MB.')
      return
    }

    const previewUrl: string = URL.createObjectURL(file)
    const uploadedInfo: UploadedImageInfo = {
      file,
      previewUrl,
      name: file.name,
      sizeFormatted: formatFileSize(file.size)
    }

    onChange(uploadedInfo)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files: FileList | null = e.target.files
    if (files && files.length > 0) {
      processFile(files[0])
    }
  }

  const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0])
    }
  }

  const handleRemove = (): void => {
    if (image?.previewUrl) {
      URL.revokeObjectURL(image.previewUrl)
    }
    onChange(null)
    setInternalError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const triggerSelect = (): void => {
    fileInputRef.current?.click()
  }

  const displayError: string | null = error || internalError

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-black uppercase tracking-wider text-slate-950">
          {label} {required && <span className="text-[#F70063]">*</span>}
        </label>
        <span className="text-[11px] font-bold text-slate-500">{sublabel}</span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        onChange={handleFileChange}
        className="hidden"
      />

      {image ? (
        // Preview State - Bold architectural box
        <div className="relative p-4 bg-white border-2 border-slate-950 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-24 h-32 relative bg-slate-100 border border-slate-950 shrink-0 overflow-hidden">
              <img
                src={image.previewUrl}
                alt={`${side} preview`}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-1 right-1 bg-slate-950 text-white p-0.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00CC66]" />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-1 overflow-hidden">
              <p className="text-sm font-black text-slate-950 truncate">{image.name}</p>
              <p className="text-xs text-slate-600 font-mono font-bold">{image.sizeFormatted}</p>

              <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
                <button
                  type="button"
                  onClick={triggerSelect}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-950 text-xs font-black uppercase tracking-wider text-slate-950 bg-white hover:bg-slate-950 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Replace Photo</span>
                </button>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-950 text-xs font-black uppercase tracking-wider text-[#F70063] bg-white hover:bg-[#F70063] hover:text-white transition-colors"
                >
                  <X className="w-3 h-3" />
                  <span>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Upload Zone - Bold architectural dashed border
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={triggerSelect}
          className={`relative border-2 border-dashed p-8 text-center cursor-pointer transition-all duration-150 ${
            dragActive
              ? 'border-slate-950 bg-slate-100'
              : displayError
              ? 'border-[#F70063] bg-rose-50/50'
              : 'border-slate-950 hover:bg-slate-50 bg-white'
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="w-12 h-12 bg-white border-2 border-slate-950 shadow-sm flex items-center justify-center text-slate-950">
              <UploadCloud className="w-6 h-6 text-[#2391FF]" />
            </div>

            <div>
              <p className="text-sm font-black text-slate-950 uppercase tracking-tight">
                Click to upload or drag & drop {side} image
              </p>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                JPG, PNG, or WEBP up to 10MB
              </p>
            </div>

            <span className="inline-flex items-center gap-1 px-3 py-1 text-[10px] font-mono font-black uppercase tracking-wider bg-slate-950 text-white">
              High Resolution • Glare Free
            </span>
          </div>
        </div>
      )}

      {displayError && (
        <p className="flex items-center gap-1.5 text-xs text-[#F70063] font-black pt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{displayError}</span>
        </p>
      )}
    </div>
  )
}
