import { Table } from "./component/table";

export default function Dashboard() {
    return (
        <section>
            <div>
                <div>
                    <h1>Colabordadores</h1>
                    <p>Veja abaixo todos os colaboradores da sua empresa cadastrados na plataforma.</p>
                </div>
                <div>
                    <input type="button" value="colaborador" placeholder="Novo Colaborador" />
                </div>
                <Table />
            </div>
        </section>
    )
}