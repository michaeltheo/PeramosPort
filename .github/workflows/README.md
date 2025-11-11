# GitHub Actions Pipelines

This directory contains GitHub Actions workflows for CI/CD automation.

## Workflows

### 1. CI/CD Pipeline (`ci-cd.yml`)

**Triggers:**

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**

1. **Install** - Installs and caches dependencies
2. **Lint** - Runs ESLint to check code quality
3. **Test** - Runs test suite
4. **Build** - Builds the production bundle
5. **Deploy** - Deploys to GitHub Pages (only on main branch pushes)

### 2. PR Checks (`pr-checks.yml`)

**Triggers:**

- Pull request opened, synchronized, or reopened

**Jobs:**

- Quick validation including linting, testing, and building
- Checks bundle size

## Setup Instructions

### 1. Enable GitHub Actions

GitHub Actions is enabled by default for most repositories. Ensure it's not disabled in your repository settings.

### 2. Add Required Scripts to package.json

Make sure your `package.json` includes these scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx,ts,tsx",
    "test": "vitest",
    "type-check": "tsc --noEmit"
  }
}
```

### 3. GitHub Pages Deployment (Optional)

If you want to deploy to GitHub Pages:

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy on pushes to `main`

### 4. Customize the Workflows

**Change Node version:**

```yaml
node-version: "20" # Change to '18', '20', etc.
```

**Change branches:**

```yaml
branches: [main, develop] # Add or remove branches
```

**Skip deployment:**
Remove or comment out the `deploy` job if you don't need it.

### 5. Add Status Badge to README

Add this to your project's README.md:

```markdown
![CI/CD](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/ci-cd.yml/badge.svg)
```

## Testing Locally

You can test your build locally before pushing:

```bash
npm ci
npm run lint
npm test
npm run build
```

## Troubleshooting

**Tests fail with "no test specified":**

- Add Vitest: `npm install -D vitest`
- Or modify the workflow to skip tests if you don't have any yet

**Lint errors:**

- Fix linting issues: `npm run lint -- --fix`
- Or add `.eslintrc.js` configuration

**Type check fails:**

- Ensure TypeScript is configured properly
- Or remove the type-check step if not using TypeScript

**Deployment fails:**

- Check that GitHub Pages is enabled
- Verify the `GITHUB_TOKEN` has proper permissions
- Ensure the `dist` folder is generated correctly

## Additional Workflows

You can add more workflows for:

- **Dependency updates** (Dependabot)
- **Security scanning**
- **Code coverage reporting**
- **Release automation**

Create new `.yml` files in `.github/workflows/` directory.
