import { useEffect, useState, useCallback } from "react";
import { fetchTransactions } from "../services/transactionService";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTransactions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchTransactions();

      setTransactions(data || []);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to load transactions"),
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  return {
    transactions,
    loading,
    error,
    refetch: loadTransactions,
  };
};
