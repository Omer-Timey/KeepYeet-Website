import type { ReactNode } from "react";

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "rule" };

function isSpecialLine(lines: string[], index: number) {
  const line = lines[index] ?? "";
  const next = lines[index + 1] ?? "";
  return (
    !line.trim() ||
    /^#{1,6}\s/.test(line) ||
    /^---+$/.test(line.trim()) ||
    /^[-*]\s+/.test(line) ||
    /^\d+\.\s+/.test(line) ||
    (line.trim().startsWith("|") && /^\|?[\s:|-]+\|/.test(next.trim()))
  );
}

function splitTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(trimmed);
    if (heading) {
      blocks.push({ type: "heading", level: heading[1].length, text: heading[2] });
      index += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push({ type: "rule" });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|") && /^\|?[\s:|-]+\|/.test((lines[index + 1] ?? "").trim())) {
      const headers = splitTableRow(trimmed);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    const unordered = /^[-*]\s+(.+)$/.exec(trimmed);
    const ordered = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (unordered || ordered) {
      const isOrdered = Boolean(ordered);
      const items: string[] = [];
      const matcher = isOrdered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/;
      while (index < lines.length) {
        const match = matcher.exec(lines[index].trim());
        if (!match) break;
        items.push(match[1]);
        index += 1;
      }
      blocks.push({ type: "list", ordered: isOrdered, items });
      continue;
    }

    const paragraph: string[] = [trimmed];
    index += 1;
    while (index < lines.length && !isSpecialLine(lines, index)) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

function inlineMarkdown(text: string): ReactNode[] {
  const tokenPattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenPattern).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={`${part}-${index}`}>{part.slice(1, -1)}</code>;
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const external = /^https?:\/\//.test(link[2]);
      return (
        <a
          key={`${link[2]}-${index}`}
          href={link[2]}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {link[1]}
        </a>
      );
    }

    return part;
  });
}

type LegalDocumentProps = {
  markdown: string;
};

export function LegalDocument({ markdown }: LegalDocumentProps) {
  const blocks = parseMarkdown(markdown);

  return (
    <div className="legal-document">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          if (block.level === 1) return null;
          if (block.level === 2) return <h2 key={`${block.text}-${index}`}>{inlineMarkdown(block.text)}</h2>;
          if (block.level === 3) return <h3 key={`${block.text}-${index}`}>{inlineMarkdown(block.text)}</h3>;
          return <h4 key={`${block.text}-${index}`}>{inlineMarkdown(block.text)}</h4>;
        }

        if (block.type === "paragraph") {
          return <p key={`paragraph-${index}`}>{inlineMarkdown(block.text)}</p>;
        }

        if (block.type === "rule") {
          return <hr key={`rule-${index}`} />;
        }

        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List key={`list-${index}`}>
              {block.items.map((item) => <li key={item}>{inlineMarkdown(item)}</li>)}
            </List>
          );
        }

        return (
          <div className="legal-table-wrap" key={`table-${index}`}>
            <table>
              <thead>
                <tr>{block.headers.map((header) => <th key={header}>{inlineMarkdown(header)}</th>)}</tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    {row.map((cell, cellIndex) => <td key={`${cellIndex}-${cell}`}>{inlineMarkdown(cell)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
