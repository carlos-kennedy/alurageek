// requests.js
export async function fetchProdutos() {
  try {
    const response = await fetch(
      "https://alurageek-zeta-one.vercel.app/db.json"
    );
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const produtos = await response.json();
    return produtos;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return null;
  }
}

export async function createProduct(product) {
  try {
    const response = await fetch(
      "https://alurageek-zeta-one.vercel.app/db.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const newProduct = await response.json();
    return newProduct;
  } catch (error) {
    console.error("Erro ao criar o produto", error);
    return null;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(
      `https://alurageek-zeta-one.vercel.app/produtos/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    console.log(`Produto com id ${id} excluído com sucesso !`);
  } catch (error) {
    console.error("Erro ao excluir produto:", error);
  }
}
