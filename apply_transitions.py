import os

files = ['Home.tsx', 'About.tsx', 'Services.tsx', 'Pricing.tsx', 'SignUp.tsx']

for f in files:
    path = f'src/pages/{f}'
    orig_path = f'{path}.orig'
    with open(orig_path, 'r') as file:
        content = file.read()

    # Add import
    if "import PageTransition" not in content:
        lines = content.splitlines()
        # Find first import or start of file
        import_index = 0
        for i, line in enumerate(lines):
            if line.startswith('import'):
                import_index = i
                break
        lines.insert(import_index, "import PageTransition from '../components/PageTransition';")
        content = "\n".join(lines)

    # Wrap return
    # Find the main return statement of the component
    # We look for 'return (' and wrap its content
    if "return (" in content:
        # Simple string replacement for these files
        content = content.replace("return (", "return (\n    <PageTransition>")
        # Find the matching closing parenthesis and semicolon
        # In these files it's usually at the end of the component
        content = content.replace("\n  );", "\n    </PageTransition>\n  );")

    with open(path, 'w') as file:
        file.write(content)
