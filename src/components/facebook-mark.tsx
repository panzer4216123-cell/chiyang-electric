export function FacebookMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.12 12.43h-2.05V20h-3.12v-7.57H8.2v-2.66h1.75V8.3c0-1.73 1.04-3.36 3.46-3.36.7 0 1.54.12 1.54.12v2.4h-.87c-.98 0-1.29.61-1.29 1.24v1.07h2.2l-.35 2.66z"
      />
    </svg>
  );
}
