import { useMemo } from "react";
import uniqueId from "lodash/fp/uniqueId";

const useId = (prefix) => {
  return useMemo(() => uniqueId(prefix), [prefix]);
};

export default useId;
