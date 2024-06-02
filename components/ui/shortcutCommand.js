"use client";

export default function ShortcutCommand({ osType }) {
  return (
    <p className="text-sm text-muted-foreground">
      Press{" "}
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        {osType === "Mac" ? (
          <>
            <span className="text-xs">⌘</span>K
          </>
        ) : (
          <>
            <span className="text-xs">Ctrl</span>K
          </>
        )}
      </kbd>
    </p>
  );
}
