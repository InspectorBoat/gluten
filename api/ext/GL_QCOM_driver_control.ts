/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  else if (typeof buf === "number" || typeof buf === "bigint") {
    if (buf === 0 || buf === 0n) return null;
    return new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(buf, 1));
  } else if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else {
    return new Uint8Array(buf.buffer);
  }
}

/// Typedefs
export type GLenum = number;
export type GLboolean = number;
export type GLbitfield = number;
/** Not an actual GL type, though used in headers in the past */
export type GLvoid = void;
export type GLbyte = number;
export type GLubyte = number;
export type GLshort = number;
export type GLushort = number;
export type GLint = number;
export type GLuint = number;
export type GLclampx = number;
export type GLsizei = number;
export type GLfloat = number;
export type GLclampf = number;
export type GLdouble = number;
export type GLclampd = number;
export type GLeglClientBufferEXT = Buffer;
export type GLeglImageOES = Buffer;
export type GLchar = number;
export type GLcharARB = number;
export type GLhandleARB = Buffer;
export type GLhalf = number;
export type GLhalfARB = number;
export type GLfixed = number;
export type GLintptr = Buffer;
export type GLintptrARB = Buffer;
export type GLsizeiptr = Deno.PointerValue;
export type GLsizeiptrARB = Deno.PointerValue;
export type GLint64 = Deno.PointerValue;
export type GLint64EXT = Deno.PointerValue;
export type GLuint64 = Deno.PointerValue;
export type GLuint64EXT = Deno.PointerValue;
export type GLsync = Buffer;
export type GLDEBUGPROC = Buffer;
export type GLDEBUGPROCARB = Buffer;
export type GLDEBUGPROCKHR = Buffer;
export type GLDEBUGPROCAMD = Buffer;
export type GLhalfNV = number;
export type GLvdpauSurfaceNV = Buffer;
export type GLVULKANPROCNV = Buffer;

/// Commands

export const def_glGetDriverControlsQCOM = {
  parameters: ["buffer", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetDriverControlsQCOM!: Deno.UnsafeFnPointer<
  typeof def_glGetDriverControlsQCOM
>;

export function GetDriverControlsQCOM(
  num: Buffer,
  size: GLsizei,
  driverControls: Buffer,
): void {
  fn_glGetDriverControlsQCOM.call(
    bufferToFFI(num),
    size,
    bufferToFFI(driverControls),
  );
}

export const def_glGetDriverControlStringQCOM = {
  parameters: ["u32", "i32", "buffer", "buffer"],
  result: "void",
} as const;

let fn_glGetDriverControlStringQCOM!: Deno.UnsafeFnPointer<
  typeof def_glGetDriverControlStringQCOM
>;

export function GetDriverControlStringQCOM(
  driverControl: GLuint,
  bufSize: GLsizei,
  length: Buffer,
  driverControlString: Buffer,
): void {
  fn_glGetDriverControlStringQCOM.call(
    driverControl,
    bufSize,
    bufferToFFI(length),
    bufferToFFI(driverControlString),
  );
}

export const def_glEnableDriverControlQCOM = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glEnableDriverControlQCOM!: Deno.UnsafeFnPointer<
  typeof def_glEnableDriverControlQCOM
>;

export function EnableDriverControlQCOM(
  driverControl: GLuint,
): void {
  fn_glEnableDriverControlQCOM.call(
    driverControl,
  );
}

export const def_glDisableDriverControlQCOM = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glDisableDriverControlQCOM!: Deno.UnsafeFnPointer<
  typeof def_glDisableDriverControlQCOM
>;

export function DisableDriverControlQCOM(
  driverControl: GLuint,
): void {
  fn_glDisableDriverControlQCOM.call(
    driverControl,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetDriverControlsQCOM = new Deno.UnsafeFnPointer(
    proc("glGetDriverControlsQCOM"),
    def_glGetDriverControlsQCOM,
  );
  fn_glGetDriverControlStringQCOM = new Deno.UnsafeFnPointer(
    proc("glGetDriverControlStringQCOM"),
    def_glGetDriverControlStringQCOM,
  );
  fn_glEnableDriverControlQCOM = new Deno.UnsafeFnPointer(
    proc("glEnableDriverControlQCOM"),
    def_glEnableDriverControlQCOM,
  );
  fn_glDisableDriverControlQCOM = new Deno.UnsafeFnPointer(
    proc("glDisableDriverControlQCOM"),
    def_glDisableDriverControlQCOM,
  );
}
