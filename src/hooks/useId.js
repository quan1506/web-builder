import { useMemo } from "react";
import uniqueId from "lodash/uniqueId";

const useId = (prefix) => {
  return useMemo(() => uniqueId(prefix), [prefix]);
};

export default useId;
