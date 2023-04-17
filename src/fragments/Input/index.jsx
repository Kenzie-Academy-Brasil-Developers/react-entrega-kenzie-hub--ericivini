export const Input = ({ value = undefined, type, placeholder, register, id }) => {
    return <input value={value} id={id} type={type} placeholder={placeholder} {...register} />
}