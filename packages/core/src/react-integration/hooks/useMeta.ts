import { FetchShape } from '@rest-hooks/core/endpoint';
import { StateContext } from '@rest-hooks/core/react-integration/context';
import { selectMeta } from '@rest-hooks/core/state/selectors';
import { useContext, useMemo } from 'react';

/** Gets meta for a fetch key. */
export default function useMeta<Params extends Readonly<object>>(
  { getFetchKey }: Pick<FetchShape<any, any, Params>, 'getFetchKey'>,
  params: Params | null,
) {
  const state = useContext(StateContext);
  const key = params ? getFetchKey(params) : '';

  return useMemo(() => {
    if (!key) return null;
    return selectMeta(state, key);
  }, [key, state]);
}
