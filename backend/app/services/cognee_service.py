import cognee


DATASET_NAME = "lifevault_memories"


async def remember_memory(title: str, description: str, category: str, date: str):
    memory_text = f"""
    Title: {title}
    Category: {category}
    Date: {date}
    Description: {description}
    """

    await cognee.add(memory_text, dataset_name=DATASET_NAME)
    await cognee.cognify(datasets=[DATASET_NAME])

    return True


async def recall_memories(question: str):
    results = await cognee.search(
        question,
        datasets=[DATASET_NAME]
    )

    return results