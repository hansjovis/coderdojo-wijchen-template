import { toHTML } from "@hansjovis/sharkdown";

export default function exercise(doc) {
    const { title, img, difficulty, author, material } = doc.meta;
    return `
<html>
    <head>
        <title>${title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Styles -->
        <link rel="stylesheet" href="../styles/style.css">
        <link rel="stylesheet" href="../styles/toc.css">
        
        <!-- Scripts -->
        <script src="../scripts/toc.js"></script>
        <script src="../scripts/scratchblocks.min.js"></script>
    </head>
    <body>

        <!-- Front page -->
        <section class="page front-page">
            <h1>${title}</h1>
            <img src="${img}" alt="">
            <p class="difficulty-level">${difficulty}</p>
            <p class="author">${author}</p>
            <p>Gemaakt op <time datetime="${(new Date()).toISOString()}">${(new Date()).toLocaleDateString("nl")}</time></p>
            <p class="material">${material}</p>
        </section>

        <!-- Table of contents -->
        <section class="page">
            <h2 id="toc-heading">Inhoudsopgave</h2>
            <nav aria-labelledby="toc-heading" id="toc"></nav>
        </section>

        <!-- Contents -->
        ${toHTML(doc.contents)}

        <!-- Convert Scratch code to blocks -->
        <script src="../scripts/load-scratchblocks-language-nl.js"></script>
        <script src="../scripts/load-scratchblocks.js"></script>
    </body>
</html>    
`;
}