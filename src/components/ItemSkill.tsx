import { ISkill } from "../../types";

const ItemSkill = ({ id, logo, name }: ISkill) => {
  return (
    <li key={id} className="w-20 flex flex-col justify-between items-center">
      <img className="h-16 w-16" src={logo} alt={name} />
      <p className="mt-1 text-sm">{name}</p>
    </li>
  )
}

export default ItemSkill