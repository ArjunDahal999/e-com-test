export const Footer: React.FC = () => (
    <footer className="bg-muted py-6 border-t">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2024 Arjun Store. All rights reserved.</p>
            <nav className="flex items-center gap-4">
                <a className="text-sm hover:underline" href="#">
                    Privacy Policy
                </a>
                <a className="text-sm hover:underline" href="#">
                    Terms of Service
                </a>
                <a className="text-sm hover:underline" href="#">
                    Contact Us
                </a>
            </nav>
        </div>
    </footer>
);