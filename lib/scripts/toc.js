function getPageNr(heading) {
    const page = heading.closest(".page");
    return parseInt(page.dataset.pageNr, 10);
}

function getHeadings(element) {
    const headings = [...element.querySelectorAll("h2, h3")];
    return headings.map(heading => ({
        level: parseInt(heading.nodeName[1], 10),
        text: heading.innerHTML,
        id: heading.innerText.replace(/\W+/g, "-").toLocaleLowerCase(),
        pageNr: getPageNr(heading),
    }));
}

function createTree(headings) {
    const root = { ...headings.shift(), children: [] };
    while (headings[0] && headings[0].level > root.level) {
      root.children.push(createTree(headings));
    }
    return root;
}

function generateHTMLForTOC(tree) {
    let children = "";
    if (tree.children && tree.children.length > 0) {
        children += "<ol>";
        for (const child of tree.children) {
            children += generateHTMLForTOC(child);
        }
        children += "</ol>";
    }

    return `<li><span class="line" data-page-nr=${tree.pageNr}>${tree.text}</span>${children}</li>`;
}

window.addEventListener("DOMContentLoaded", () => {
    console.log("Generating Table of Contents...");

    const pages = document.querySelectorAll(".page");
    pages.forEach((page, index) => page.dataset.pageNr = index + 1);

    const headings = getHeadings(document.body);
    const tree = createTree([ { level: 0 }, ...headings]);

    console.log("Generated heading hierarchy:", tree);

    let html = "";
    for (node of tree.children) {
        html += generateHTMLForTOC(node);
    }
    html = `<ol>${html}</ol>`;

    const tocRoot = document.getElementById("toc");
    tocRoot.innerHTML = html;
});