function LoadingSpinner({ label = 'Loading' }) {
  return (
    <div role="status" className="flex items-center justify-center gap-3 py-12 text-sm text-slate-500">
      <span className="size-5 animate-spin rounded-full border-2 border-slate-200 border-t-teal-800" />
      {label}
    </div>
  )
}

export default LoadingSpinner
