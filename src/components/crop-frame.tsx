import type { ReactNode } from "react";

export function CropFrame({ children }: { children: ReactNode }) {
  return (
    <div className="crop">
      <span className="crop-mark crop-tl" />
      <span className="crop-mark crop-tr" />
      <span className="crop-mark crop-bl" />
      <span className="crop-mark crop-br" />
      {children}
    </div>
  );
}
