import { useCounterStore } from "./store/counterStore";

function App() {
  //Esta es la manera mas simple, asi importamos un estado a la vez
  // const count = useCounterStore((state) => state.count);

  //Asi podemos importar varios estados al mismo tiempo

  //Tambien se puede desestructurar
  /* const {count, title} = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
  }));

  */
  const values = useCounterStore((state) => ({
    count: state.count,
    title: state.title,
  }));

  const { increment, decrement, reset } = useCounterStore();

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-[45px] font-[500]">
          Welcome to <span className="text-blue-600">Zustand</span> !!!
        </h1>
        <span className="text-[25px] font-[500] mt-5">
          Counter <span className="text-blue-600"> {values.count}</span>
        </span>

        <span className="text-[15px] font-[500] mt-10">{values.title} !!!</span>

        <div className="flex gap-5 mt-10 mb-28">
          <button
            className="w-[150px] h-[45px] text-[17px] mt-10 rounded-md font-[500] text-white bg-zinc-900 hover:shadow-md hover:shadow-zinc-600"
            onClick={() => {
              increment(1);
            }}
          >
            Increment <span className="text-blue-600 font-[700] ">+</span>
          </button>
          <button
            className="w-[150px] h-[45px] text-[17px] mt-10 rounded-md font-[500] text-white bg-zinc-900 hover:shadow-md hover:shadow-zinc-600"
            onClick={() => {
              decrement(1);
            }}
          >
            Decrement <span className="text-blue-600 font-[700] ">-</span>
          </button>
          <button
            className="w-[150px] h-[45px] text-[17px] mt-10 rounded-md font-[500] text-white bg-zinc-900 hover:shadow-md hover:shadow-zinc-600"
            onClick={() => {
              reset(1);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
