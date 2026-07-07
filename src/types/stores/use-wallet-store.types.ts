export interface WalletState {
  address: string | null;
  isConnected: boolean;
  syncConnection: (address: string | null) => void;
  disconnect: () => void;
}
