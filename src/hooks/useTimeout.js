const name = `useTimeout`;

const implementation = `const useTimeout = (ms = 0) => {
  const [ready, setReady] = useState(false);

  useEffect(
    () => {
      let timer = setTimeout(() => {
        setReady(true);
      }, ms);

      return () => {
        clearTimeout(timer);
      };
    },
    [ms]
  );

  return ready;
};`;

const usage = `function Demo() {
  const ready = useTimeout(2000);

  return <div>Ready: {ready ? "Yes" : "No"}</div>;
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useTimeout.md`;

const description = `This hook returns true after a specified number of milliseconds.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}