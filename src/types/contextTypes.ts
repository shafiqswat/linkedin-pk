/** @format */

export interface AuthContextType {
  user: string | null;
  error: string | null;
  loading: boolean;
  isAuthenticated: boolean;
  setUser: (user: string | null) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  signUp: (data: {
    email: string;
    password: string;
    userName: string;
  }) => Promise<void>;
  signIn: (data: { email: string; password: string }) => Promise<void>;
}
