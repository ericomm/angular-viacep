export interface Cep {
  id?: number;
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}

export const ceps = [
  {
    id: 1,
    cep: '91720000',
    logradouro: 'Avenida nonoai',
    complemento: '',
    bairro: 'Nonoai',
    localidade: 'Porto Alegre',
    uf: 'RS'
  },

  {
    id: 2,
    cep: '90830220',
    logradouro: 'Rua canto e melo',
    complemento: '',
    bairro:'Nonoai',
    cidade: 'Porto Alegre',
    uf: 'RS'
  }
];


