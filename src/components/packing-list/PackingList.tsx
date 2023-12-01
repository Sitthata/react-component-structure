export type ItemType = {
  name: string;
  isPacked: boolean;
};

const PackingList = () => {
  return (
    <section className="p-5 bg-blue-400">
      <h1 className="text-2xl">Sally Ride's Packing List</h1>
      <ul></ul>
    </section>
  );
};

function Item({ name, isPacked }: ItemType) {
  return (
    <li className="list-disc list-inside">{name} {isPacked}</li>
  );
}

export default PackingList;
