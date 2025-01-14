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

export const def_glClearBufferData = {
  parameters: ["u32", "u32", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearBufferData!: Deno.UnsafeFnPointer<typeof def_glClearBufferData>;

export function ClearBufferData(
  target: GLenum,
  internalformat: GLenum,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearBufferData.call(
    target,
    internalformat,
    format,
    type,
    bufferToFFI(data),
  );
}

export const def_glClearBufferSubData = {
  parameters: ["u32", "u32", "buffer", "isize", "u32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glClearBufferSubData!: Deno.UnsafeFnPointer<
  typeof def_glClearBufferSubData
>;

export function ClearBufferSubData(
  target: GLenum,
  internalformat: GLenum,
  offset: GLintptr,
  size: GLsizeiptr,
  format: GLenum,
  type: GLenum,
  data: Buffer,
): void {
  fn_glClearBufferSubData.call(
    target,
    internalformat,
    bufferToFFI(offset),
    size,
    format,
    type,
    bufferToFFI(data),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glClearBufferData = new Deno.UnsafeFnPointer(
    proc("glClearBufferData"),
    def_glClearBufferData,
  );
  fn_glClearBufferSubData = new Deno.UnsafeFnPointer(
    proc("glClearBufferSubData"),
    def_glClearBufferSubData,
  );
}
