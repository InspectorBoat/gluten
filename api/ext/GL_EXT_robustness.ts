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

/// Enums
export const NO_ERROR = 0x0;
export const GUILTY_CONTEXT_RESET_EXT = 0x8253;
export const INNOCENT_CONTEXT_RESET_EXT = 0x8254;
export const UNKNOWN_CONTEXT_RESET_EXT = 0x8255;
export const CONTEXT_ROBUST_ACCESS_EXT = 0x90f3;
export const RESET_NOTIFICATION_STRATEGY_EXT = 0x8256;
export const LOSE_CONTEXT_ON_RESET_EXT = 0x8252;
export const NO_RESET_NOTIFICATION_EXT = 0x8261;

/// Commands

export const def_glGetGraphicsResetStatusEXT = {
  parameters: [],
  result: "u32",
} as const;

let fn_glGetGraphicsResetStatusEXT!: Deno.UnsafeFnPointer<
  typeof def_glGetGraphicsResetStatusEXT
>;

export function GetGraphicsResetStatusEXT(): GLenum {
  return fn_glGetGraphicsResetStatusEXT.call();
}

export const def_glReadnPixelsEXT = {
  parameters: ["i32", "i32", "i32", "i32", "u32", "u32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glReadnPixelsEXT!: Deno.UnsafeFnPointer<typeof def_glReadnPixelsEXT>;

export function ReadnPixelsEXT(
  x: GLint,
  y: GLint,
  width: GLsizei,
  height: GLsizei,
  format: GLenum,
  type: GLenum,
  bufSize: GLsizei,
  data: Buffer,
): void {
  fn_glReadnPixelsEXT.call(
    x,
    y,
    width,
    height,
    format,
    type,
    bufSize,
    bufferToFFI(data),
  );
}

export const def_glGetnUniformfvEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformfvEXT!: Deno.UnsafeFnPointer<typeof def_glGetnUniformfvEXT>;

export function GetnUniformfvEXT(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformfvEXT.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

export const def_glGetnUniformivEXT = {
  parameters: ["u32", "i32", "i32", "buffer"],
  result: "void",
} as const;

let fn_glGetnUniformivEXT!: Deno.UnsafeFnPointer<typeof def_glGetnUniformivEXT>;

export function GetnUniformivEXT(
  program: GLuint,
  location: GLint,
  bufSize: GLsizei,
  params: Buffer,
): void {
  fn_glGetnUniformivEXT.call(
    program,
    location,
    bufSize,
    bufferToFFI(params),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glGetGraphicsResetStatusEXT = new Deno.UnsafeFnPointer(
    proc("glGetGraphicsResetStatusEXT"),
    def_glGetGraphicsResetStatusEXT,
  );
  fn_glReadnPixelsEXT = new Deno.UnsafeFnPointer(
    proc("glReadnPixelsEXT"),
    def_glReadnPixelsEXT,
  );
  fn_glGetnUniformfvEXT = new Deno.UnsafeFnPointer(
    proc("glGetnUniformfvEXT"),
    def_glGetnUniformfvEXT,
  );
  fn_glGetnUniformivEXT = new Deno.UnsafeFnPointer(
    proc("glGetnUniformivEXT"),
    def_glGetnUniformivEXT,
  );
}
