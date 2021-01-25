import { useEffect, useRef, useState } from "preact/hooks";
import { reactive, watchEffect } from "vue";

function touch(ref: any, proxy: any) {
    for (const key in ref) {
        const refer = ref[key];
        const proxied = proxy[key];
        if (refer instanceof Object) {
            touch(refer, proxied);
        }
    }
}

/** See {@link https://v3.vuejs.org/api/basic-reactivity.html#reactive Vue}. */
export function useReactive<S extends object>(state: S): S {
    const counter = useRef(0);
    const [, forceUpdate] = useState(0);
    const react = useRef(reactive(state));
    // prettier-ignore
    useEffect(() => watchEffect(() => {
        touch(state, react.current);
        if (counter.current === 0) {
            counter.current++;
        } else {
            forceUpdate((e) => ~e);
        }
    }), []);
    return react.current as S;
}
