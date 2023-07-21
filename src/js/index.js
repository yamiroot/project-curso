const templateItem = (name, dni, school, code, cellphone) => {
    return `
    <div class="row rounded pt-4 pb-4 pl-4 bg-light border-item ml-3 mr-3">
        <div id="result" class="col-sm">
            <p id="nombre" class="font-text"><span class="font-weight-bold">Nombre:</span> ${name}</p>
            <p id="dni" class="font-text"><span class="font-weight-bold">DNI:</span> ${dni}</p>
            <p id="escuela" class="font-text"><span class="font-weight-bold">Escuela Profesional:</span> ${school}</p>
            <p id="codigoAlumno" class="font-text"><span class="font-weight-bold">Código de estudiante:</span> ${code}</p>
            <p id="telefono" class="font-text"><span class="font-weight-bold">Telefóno:</span> ${cellphone}</p>
        </div>
    </div>`;
}

const templateAlert = () => {
    return `
        <div class="row alert alert-danger d-flex justify-content-center ml-3 mr-3" role="alert">
            <p class="font-text text-center mt-2">No se encontraron resultados</p>
        </div>
    `;
}

const search = (code) => {
    let template = "";

    fetch('/src/js/data.json')
        .then((res) => {
            console.log(res);
            return res.json();
        }
        ).then((data) => {
            let students = data.filter(item => item.codigoAlumno.localeCompare(code) == 0);

            if (students.length > 0) {
                students.forEach(element => {
                    template += templateItem(element.nombre, element.dni, element.escuela, element.codigoAlumno, element.telefono);
                });
            } else {
                template = templateAlert();
            }

            const colResults = document.createElement("div");
            colResults.className = "col-sm";
            colResults.innerHTML = template;

            document.querySelector("#result").appendChild(colResults);
        }
        );
}

const controller = () => {

    document.querySelector("#search").addEventListener("click", () => {
        const code = document.getElementById("code").value;

        const div = document.querySelector("#result");
        div.innerHTML = "";

        search(code);
    });
}

controller();