export const Input = ({ type, placeholder, register, id }) => {
    return <input id={id} type={type} placeholder={placeholder} {...register} />
}