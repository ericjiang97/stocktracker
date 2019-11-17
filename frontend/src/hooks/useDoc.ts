import { useEffect } from "react";
import { firestore } from "firebase";

interface Entity {
  id: string;
}

const dataFromSnapshot = <T extends Entity>(
  snapshot: firestore.DocumentSnapshot
): T | undefined => {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data() as any;
  return {
    ...data,
    id: snapshot.id
  };
};

interface FirebaseHookHandlers {
  subscribe: () => void;
  error: (error: Error) => void;
  unsubscribe: () => void;
}

interface DocHandlers<T extends Entity> extends FirebaseHookHandlers {
  data: (data: T | undefined) => void;
}

export const useDoc = <T extends Entity>(
  getDocReference: () => firestore.DocumentReference,
  handlers: DocHandlers<T>,
  deps?: any
) => {
  useEffect(() => {
    handlers.subscribe();
    const unsubscribeFromDoc = getDocReference().onSnapshot(
      snapshot => handlers.data(dataFromSnapshot(snapshot)),
      error => handlers.error(error)
    );
    return () => {
      handlers.unsubscribe();
      unsubscribeFromDoc();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};
