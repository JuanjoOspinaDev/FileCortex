export type FileStatus = "pendiente" | "procesando" | "fallido" | "completado";

export type FileItem = {
  id: string;
  name: string;
  type: string;
  size: number;
  status: FileStatus;
  createdAt: string;
  previewUrl: string;
};
