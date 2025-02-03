import React from 'react';

export type Cliente = {
        nombre: string;
        empresa: string;
        id: number;
        email: string;
        telefono: string;
};
export type RootStackParamList = {
  NuevoCliente: {
    setConsultarAPI: React.Dispatch<React.SetStateAction<boolean>>;
    cliente: Cliente | null;
  };
  Inicio: undefined;
  DetalleCliente: {
    item: Cliente;
    setConsultarAPI: React.Dispatch<React.SetStateAction<boolean>>;
  };
};
