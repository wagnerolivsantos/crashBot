class ProgressMonitor {
    constructor(totalSteps) {
        this.totalSteps = totalSteps;
        this.currentStep = 0;
    }

    updateProgress() {
        this.currentStep++;
        const percentage = (this.currentStep / this.totalSteps) * 100;
        process.stdout.write(
            `Progresso: ${percentage.toFixed(2)}% concluído\r`);
    }

    finish() {
        process.stdout.write('\n');
    }
}

module.exports = ProgressMonitor;


