export const Select = ({ id, register }) => {
    return <>
        {/* <i class="fa-sharp fa-solid fa-angle-down"></i> */}
        <select name={id} id={id} {...register}>
            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
        </select>
    </>
}