# Node.js Employee Directory Sync for Ivanti Heat

## Overview

This Node.js project automates the synchronization of employee data from BambooHR to LDAP using Ivanti Heat. The application leverages the power of Node.js to streamline the process of keeping the employee directory in LDAP up-to-date with the latest information from BambooHR.

## Features

- **Scheduled Sync:** *Coming Soon*
- **Bi-Directional Sync:** Enable bi-directional synchronization to ensure changes made in BambooHR or LDAP are reflected in both systems.

## Prerequisites

Make sure you have the following components set up before deploying the synchronization:

- [BambooHR](https://www.bamboohr.com/)
- [Ivanti Heat Service Management](https://www.ivanti.com/products/service-management)
- [Node.js](https://nodejs.org/)

## Getting Started

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/your-username/employee-directory-sync-node.git
   ```
2. Install dependencies.

```bash

cd employee-directory-sync-node
npm install
```
3. Create a .env file in the project root and configure BambooHR and Ivanti Heat API credentials.

env
```
BAMBOOHR_API_KEY=your-bamboohr-api-key
BAMBOOHR_BASE_URL=https://api.bamboohr.com/api/gateway.php/companyName/v1/
IVANTI_HEAT_API_URL=https://your-ivanti-heat-instance/api
IVANTI_HEAT_API_KEY=your-ivanti-heat-api-key
```
Run the synchronization script.

```bash
node index.js
```
## Usage
Execute the synchronization script manually.

```bash
node index.js
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/mhtajan/Ivanti-BambooHR/edit/main/LICENSE) file for details.
