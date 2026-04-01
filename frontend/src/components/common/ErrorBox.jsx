export default function ErrorBox({ message }) {
  return (
    <div className="card-dark border-red-200 dark:border-red-800/50 animate-scale-in">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200 mb-1">
            Error
          </h3>
          <p className="text-sm text-red-700 dark:text-red-300">
            {message}
          </p>
        </div>
        <div className="flex-shrink-0">
          <button className="text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
