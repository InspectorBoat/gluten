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

export const def_glMultiDrawArraysIndirect = {
  parameters: ["u32", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawArraysIndirect!: Deno.UnsafeFnPointer<
  typeof def_glMultiDrawArraysIndirect
>;

export function MultiDrawArraysIndirect(
  mode: GLenum,
  indirect: Buffer,
  drawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawArraysIndirect.call(
    mode,
    bufferToFFI(indirect),
    drawcount,
    stride,
  );
}

export const def_glMultiDrawElementsIndirect = {
  parameters: ["u32", "u32", "buffer", "i32", "i32"],
  result: "void",
} as const;

let fn_glMultiDrawElementsIndirect!: Deno.UnsafeFnPointer<
  typeof def_glMultiDrawElementsIndirect
>;

export function MultiDrawElementsIndirect(
  mode: GLenum,
  type: GLenum,
  indirect: Buffer,
  drawcount: GLsizei,
  stride: GLsizei,
): void {
  fn_glMultiDrawElementsIndirect.call(
    mode,
    type,
    bufferToFFI(indirect),
    drawcount,
    stride,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glMultiDrawArraysIndirect = new Deno.UnsafeFnPointer(
    proc("glMultiDrawArraysIndirect"),
    def_glMultiDrawArraysIndirect,
  );
  fn_glMultiDrawElementsIndirect = new Deno.UnsafeFnPointer(
    proc("glMultiDrawElementsIndirect"),
    def_glMultiDrawElementsIndirect,
  );
}
