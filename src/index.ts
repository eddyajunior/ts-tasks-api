function formatMoney(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

console.log(formatMoney(1234.56)); // R$ 1.234,56