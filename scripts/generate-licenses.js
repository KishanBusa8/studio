#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateLicenseReport() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageLockPath = path.join(process.cwd(), 'package-lock.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.error('package.json not found');
    process.exit(1);
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const allDependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies
  };

  console.log('# Complete License Report\n');
  console.log('Generated on:', new Date().toISOString());
  console.log('\n## Project Information\n');
  console.log(`- **Name**: ${packageJson.name}`);
  console.log(`- **Version**: ${packageJson.version}`);
  console.log(`- **License**: ${packageJson.license || 'Not specified'}`);
  console.log(`- **Author**: ${packageJson.author || 'Not specified'}`);
  
  console.log('\n## Dependencies\n');
  
  Object.entries(allDependencies).forEach(([name, version]) => {
    const packagePath = path.join(process.cwd(), 'node_modules', name, 'package.json');
    
    if (fs.existsSync(packagePath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const license = pkg.license || pkg.licenses || 'Not specified';
        console.log(`- **${name}** (${version}) - ${license}`);
      } catch (error) {
        console.log(`- **${name}** (${version}) - License information unavailable`);
      }
    } else {
      console.log(`- **${name}** (${version}) - Package not found`);
    }
  });

  console.log('\n## License Types Summary\n');
  
  const licenseCounts = {};
  Object.entries(allDependencies).forEach(([name, version]) => {
    const packagePath = path.join(process.cwd(), 'node_modules', name, 'package.json');
    
    if (fs.existsSync(packagePath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        const license = pkg.license || pkg.licenses || 'Unknown';
        licenseCounts[license] = (licenseCounts[license] || 0) + 1;
      } catch (error) {
        licenseCounts['Unknown'] = (licenseCounts['Unknown'] || 0) + 1;
      }
    }
  });

  Object.entries(licenseCounts)
    .sort(([,a], [,b]) => b - a)
    .forEach(([license, count]) => {
      console.log(`- **${license}**: ${count} packages`);
    });
}

if (require.main === module) {
  generateLicenseReport();
}

module.exports = { generateLicenseReport }; 