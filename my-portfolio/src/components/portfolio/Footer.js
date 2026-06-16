import { Github, Linkedin, Mail } from "lucide-react";
export function Footer() {
    return (<footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 <span className="font-semibold text-foreground">Gaurav Kumar</span>. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/Gaurav012221842" target="_blank" rel="noreferrer" className="hover:text-foreground" aria-label="GitHub">
            <Github className="h-5 w-5"/>
          </a>
          <a href="https://www.linkedin.com/in/gaurav94" target="_blank" rel="noreferrer" className="hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5"/>
          </a>
          <a href="mailto:gaurav94174@gmail.com" target="_blank" className="hover:text-foreground" aria-label="Email">
            <Mail className="h-5 w-5"/>
          </a>
        </div>
      </div>
    </footer>);
}
