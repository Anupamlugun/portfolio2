import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Footer() {
  return (
    <footer className="relative bg-brand-soft py-8">
      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              © <span>Copyright</span>{" "}
              <span className="font-semibold px-1">Anupam Lugun</span>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
