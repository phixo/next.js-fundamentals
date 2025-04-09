# Style Guide

## React Component Structure

### Component Declaration

```typescript
// ✅ DO: Use const with arrow function
const ComponentName = ({ prop1, prop2 }: Props) => {
  return <div>Content</div>
}

export default ComponentName

// ❌ DON'T: Use function declaration with export default
export default function ComponentName() {
  return <div>Content</div>
}
```

### File Organization

- Place `export default` statement at the bottom of the file
- Use TypeScript for all components
- Include proper type definitions for props
- Use consistent semicolons

## Project Structure

- Keep route groups in parentheses: `(group-name)`
- Place layouts and pages in their respective directories
- Maintain clear separation between different sections of the application

## TypeScript

- Always include proper type definitions
- Use TypeScript for all new files
- Avoid using `.js` extensions when TypeScript is available

## Styling

- Use Tailwind CSS for styling
- Follow consistent class naming conventions
- Keep styles modular and component-specific

## Best Practices

- Keep components focused and single-responsibility
- Use proper TypeScript types for all props and state
- Maintain consistent code formatting
- Document complex logic or important decisions

---

_This style guide is a living document and will be updated as new conventions are established._
