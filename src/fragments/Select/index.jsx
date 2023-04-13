export const Select = ({ id, register, children}) => {
    return <>
        {/* <i class="fa-sharp fa-solid fa-angle-down"></i> */}
        <select name={id} id={id} {...register}>
            {children}
        </select>
    </>
}