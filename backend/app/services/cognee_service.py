import cognee


async def remember_memory(title: str, description: str, category: str, date: str):
    memory_text = f"""
    Title: {title}
    Category: {category}
    Date: {date}
    Description: {description}
    """

    await cognee.add(memory_text, dataset_name="lifevault_memories")
    await cognee.cognify(datasets=["lifevault_memories"])

    return True


async def recall_memories(question: str):
    results = await cognee.search(
        question,
        datasets=["lifevault_memories"]
    )

    return results