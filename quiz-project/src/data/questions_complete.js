const data = [

    {
    category: 'HTML',
    questions: [
        {
            question: "Qual tag cria um hiperlink?",
            options: ["<p>", '<a>' , "<u>" , "<hr>" ],
            answer: '<a>',
            tip: 'Primeira das vogais'

        },
        {
            question: "Qual atributo é unico em um elemento HTML?",
            options: ["id", "Class" , "name" , "type" ],
            answer: "id",
            tip: 'Cada pessoa tem uma única identidade'

        },
        {
            question: "Qual atributo usar para informar o link de uma imagem?",
            options: ["href", "src" , "down" , "link" ],
            answer: "src",
            tip: 'source - FONTE'

        }
    ]},
    {
        category: 'JAVASCRIPT',
        questions: [
            {
                question: "Qual dos comandos não se cria uma variavel?",
                options: ["const", 'var' , "let" , "variable" ],
                answer: 'variable',
                tip: 'comandos para criar variaveis são abreviados'
    
            },
            {
                question: "Qual desses tipos de dado não é primitivo?",
                options: ["number", "object" , "string" , "boolean" ],
                answer: "object",
                tip: 'tudo no javascript é um ... '
    
            },
            {
                question: "Um array é formado por?",
                options: ["chave e valor", "indices e valores" , "valor" , "null" ],
                answer: "indices e valores",
                tip: 'cada valor tem seu indice no array'
    
            }
        ]},
        {
            category: 'CSS',
            questions: [
                {
                    question: "Qual é o seletor universal?",
                    options: ["*", '#' , "." , "all" ],
                    answer: '*',
                    tip: 'Simbolo de multiplicação na programação'
        
                },
                {
                    question: "toda regra CSS deve terminar com?",
                    options: [";", "." , ":" , "," ],
                    answer: ";",
                    tip: 'simbolo de continuidade'
        
                },
                {
                    question: "qual regra define o tipo de fonte?",
                    options: ["font-family", "font-type" , "font-name" , "font-style" ],
                    answer: "font-family",
                    tip: 'fontes são organizadas por familias'
        
                }
            ]}



]

export default data