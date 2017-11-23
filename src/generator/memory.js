import Syntax from "../Syntax";
import walkNode from "../utils/walk-node";

const generateMemory = node => {
  const memory = { max: 0, initial: 0 };

  walkNode({
    [Syntax.Pair]: ({ params }) => {
      // This could procude garbage values but that is a fault of the source code
      const [{ value: key }, { value }] = params;
      memory[key] = parseInt(value);
    }
  })(node);

  return memory;
};

export default generateMemory;
