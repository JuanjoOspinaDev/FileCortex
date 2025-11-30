export type LogItem = {
  id: string;
  fileId: string;
  fileName: string;
  fileType: string;
  process: string;
  status: "exito" | "fallo";
  message: string;
  createdAt: string;
  details?: string;
};
