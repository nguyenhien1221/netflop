export interface WalletState {
  address: string | null;
  isConnected: boolean;
  connect: (address: string) => void;
  disconnect: () => void;
}
