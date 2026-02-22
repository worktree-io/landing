import { type Editor } from "./editor";

export const EDITORS: Editor[] = [
  { name: "Cursor", cmd: "cursor ." },
  { name: "VS Code", cmd: "code ." },
  { name: "Zed", cmd: "zed ." },
  { name: "Sublime Text", cmd: "subl ." },
  { name: "Neovim", cmd: "nvim ." },
  { name: "Vim", cmd: "vim ." },
  { name: "Alacritty", cmd: "alacritty --working-directory ." },
  { name: "Kitty", cmd: "kitty --directory ." },
  { name: "WezTerm", cmd: "wezterm start --cwd ." },
  { name: "iTerm2", cmd: "open -a iTerm ." },
  { name: "Warp", cmd: "open -a Warp ." },
  { name: "Ghostty", cmd: "open -a Ghostty ." },
  { name: "Windows Terminal", cmd: "wt -d ." },
  { name: "Custom", cmd: "open -a 'My Editor' ." },
];
